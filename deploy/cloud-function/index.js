exports.returnMissionStatement = (req, res) => {
  const partOneArray = [
    "mission",
    "purpose",
    "passion",
    "vision",
    "strategy",
    "inspiration",
    "culture",
  ];

  const partTwoArray = [
    "inspire",
    "synergize with",
    "collabrate with",
    "help",
    "lead",
    "empower",
  ];

  const partThreeArray = [
    "the world",
    "our society",
    "our client",
    "leading industries",
    "business professional",
    "ever-changing technology",
  ];

  const partFourArray = [
    "transform",
    "leverage",
    "deepen",
    "develop",
    "deliver",
    "evolve",
    "provide",
  ];

  const partFiveArray = [
    "solution",
    "diversity and inclusion",
    "value",
    "system",
    "expertise",
    "our digital world",
    "insights",
    "thought leadership",
  ];

  const partSixArray = ["in everything we do.", "for our clients."];

  const returnRandomItemFromArray = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const message = `Our ${returnRandomItemFromArray(
    partOneArray
  )} is to ${returnRandomItemFromArray(
    partTwoArray
  )} ${returnRandomItemFromArray(
    partThreeArray
  )} and ${returnRandomItemFromArray(
    partFourArray
  )} ${returnRandomItemFromArray(partFiveArray)} ${returnRandomItemFromArray(
    partSixArray
  )}`;

  res.status(200).send({
    message: message,
  });
};
