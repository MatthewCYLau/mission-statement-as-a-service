resource "google_storage_bucket" "cloud_function" {
  name = "msaas-cloud-function-bucket"
}

resource "google_storage_bucket_object" "archive" {
  name   = "index.zip"
  bucket = google_storage_bucket.cloud_function.name
  source = "cloud-function/function.zip"
}

resource "google_cloudfunctions_function" "function" {
  name        = "msaas-cloud-function"
  description = "Mission Statement as a Service Cloud function"
  runtime     = "nodejs10"
  max_instances = 2

  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.cloud_function.name
  source_archive_object = google_storage_bucket_object.archive.name
  trigger_http          = true
  timeout               = 60
  entry_point           = "returnMissionStatement"
  labels = {
    my-label = "msaas"
  }

}

resource "google_cloudfunctions_function_iam_member" "invoker" {
  cloud_function = google_cloudfunctions_function.function.name

  role   = "roles/cloudfunctions.invoker"
  member = "allUsers"
}

output "cloud_function_trigger_url" {
  value       = google_cloudfunctions_function.function.https_trigger_url
  description = "Cloud Function trigger URL"
}
