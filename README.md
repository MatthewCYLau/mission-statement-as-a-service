# Mission Statement as a Service

A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) which returns a corporate mission statement

[![Netlify Status](https://api.netlify.com/api/v1/badges/12fd9600-a393-464e-a0aa-2e96fb4ba0cd/deploy-status)](https://app.netlify.com/sites/sharp-austin-24d41c/deploys)

App URL [here](https://sharp-austin-24d41c.netlify.app/)

## Pre-requisites

- Make sure you have installed [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli), and [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)

```bash
terraform -help # prints Terraform options
```

## Run/build app locally

```bash
npm i
npm run dev
```

## Terraform configuration

- Populate `deploy/terraform.tfvars`:

```bash
region  = "europe-west2"
zone    = "europe-west2-b"
project = <GCP-PROJECT-ID>
```

- Create a Cloud Storage bucket to store Terraform state, and populate `main.tf`:

```bash
terraform {
  backend "gcs" {
    bucket = <BUCKET-NAME>
    prefix = "terraform/state"
  }
}
```

## Create GCP resources

```bash
gcloud auth application-default login # authenticate with GCP
cd deploy # change to deploy directory
terraform init # initialises Terraform
terraform apply # deploys GCP stack
terraform destroy # destroys GCP stack
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

If you find this project helpful, please give a :star: or even better buy me a coffee :coffee: :point_down: because I'm a caffeine addict :sweat_smile:

<a href="https://www.buymeacoffee.com/matlau" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
