document.addEventListener("DOMContentLoaded", function () {
  const fireballButton = document.getElementById("fireball-button");
  const lightningBoltButton = document.getElementById("lightingBolt-button");
  const createUndeadButton = document.getElementById("createUndead-button");
  const OwlbearButton = document.getElementById("Owlbear-button");
  const pegasusButton = document.getElementById("pegasus-button");
  const mainContent = document.getElementById("clear-main");
  const spellContent = document.getElementById("spell-content");
  const image = document.getElementById("image");
  const adultBlackDragonButton = document.getElementById(
    "adultBlackDragon-button"
  );
  const backButton = document.getElementById("backButton");

  /*Spells*/

  function fetchFBall() {
    const fireURL = "https://www.dnd5eapi.co/api/spells/fireball";
    fetch(fireURL)
      .then((data) => {
        return data.json();
      })
      .then((completedata) => {
        document.getElementById("name").innerHTML = completedata.name;
        document.getElementById("desc").innerHTML = completedata.desc;
        document.getElementById(
          "high-level"
        ).innerHTML = `Higher Level: <br>${completedata.higher_level}`;
        document.getElementById(
          "range"
        ).innerHTML = `Range: ${completedata.range}`;
        document.getElementById(
          "aoe"
        ).innerHTML = `AOE:<br>* Type: ${completedata.area_of_effect.type} <br>* Size: ${completedata.area_of_effect.size} feet`;
      });
    image.src = "images/fireball.png";
    image.style.width = "30%";
    image.style.display = "block";
  }

  fireballButton.addEventListener("click", () => {
    mainContent.style.display = "none";
    spellContent.style.display = "block";
    backButton.style.display = "block";
    fetchFBall();
  });

  function fetchLBolt() {
    const lightningURL = "https://www.dnd5eapi.co/api/spells/lightning-bolt";
    fetch(lightningURL)
      .then((data) => {
        return data.json();
      })
      .then((completedata) => {
        document.getElementById("name").innerHTML = completedata.name;
        document.getElementById("desc").innerHTML = completedata.desc;
        document.getElementById(
          "high-level"
        ).innerHTML = `Higher Level: <br>${completedata.higher_level}`;
        document.getElementById(
          "range"
        ).innerHTML = `Range: ${completedata.range}`;
        document.getElementById(
          "aoe"
        ).innerHTML = `AOE:<br>* Type: ${completedata.area_of_effect.type} <br>* Size: ${completedata.area_of_effect.size} feet`;
      });
    image.src = "images/lightning-bolt.webp";
    image.style.width = "60%";
    image.style.display = "block";
  }

  lightningBoltButton.addEventListener("click", () => {
    mainContent.style.display = "none";
    spellContent.style.display = "block";
    backButton.style.display = "block";
    fetchLBolt();
  });

  function fetchCUndead() {
    const undeadURL = "https://www.dnd5eapi.co/api/spells/create-undead";
    fetch(undeadURL)
      .then((data) => {
        return data.json();
      })
      .then((completedata) => {
        document.getElementById("name").innerHTML = completedata.name;
        document.getElementById("desc").innerHTML = completedata.desc;
        document.getElementById(
          "high-level"
        ).innerHTML = `Higher Level: <br>${completedata.higher_level}`;
        document.getElementById(
          "range"
        ).innerHTML = `Range: ${completedata.range}`;
        document.getElementById("aoe").innerHTML = "";
      });

    image.src = "images/create-undead.webp";
    image.style.width = "60%";
    image.style.display = "block";
  }

  createUndeadButton.addEventListener("click", () => {
    mainContent.style.display = "none";
    spellContent.style.display = "block";
    backButton.style.display = "block";
    fetchCUndead();
  });

  /*Monsters*/

  function fetchOwl() {
    const owlURL = "https://www.dnd5eapi.co/api/monsters/owlbear";
    fetch(owlURL)
      .then((data) => {
        return data.json();
      })
      .then((completedata) => {
        document.getElementById("name").innerHTML = completedata.name;
        document.getElementById(
          "desc"
        ).innerHTML = `Size: ${completedata.size}`;
        document.getElementById(
          "high-level"
        ).innerHTML = `Type: ${completedata.type}`;
        document.getElementById(
          "range"
        ).innerHTML = `Alignment: ${completedata.alignment}`;
        document.getElementById(
          "aoe"
        ).innerHTML = `Armor Class:<br>* Type: ${completedata.armor_class[0].type} <br>* Value: ${completedata.armor_class[0].value}`;
      });
    image.src = "images/owl-bear.jpg";
    image.style.width = "50%";
    image.style.display = "block";
  }

  OwlbearButton.addEventListener("click", () => {
    mainContent.style.display = "none";
    spellContent.style.display = "block";
    backButton.style.display = "block";
    fetchOwl();
  });

  function fetchPegasus() {
    const pegasusURL = "https://www.dnd5eapi.co/api/monsters/pegasus";
    fetch(pegasusURL)
      .then((data) => {
        return data.json();
      })
      .then((completedata) => {
        document.getElementById("name").innerHTML = completedata.name;
        document.getElementById(
          "desc"
        ).innerHTML = `Size: ${completedata.size}`;
        document.getElementById(
          "high-level"
        ).innerHTML = `Type: ${completedata.type}`;
        document.getElementById(
          "range"
        ).innerHTML = `Alignment: ${completedata.alignment}`;
        document.getElementById(
          "aoe"
        ).innerHTML = `Armor Class:<br>* Type: ${completedata.armor_class[0].type} <br>* Value: ${completedata.armor_class[0].value}`;
      });
    image.src = "images/pegasus.webp";
    image.style.width = "50%";
    image.style.display = "block";
  }

  pegasusButton.addEventListener("click", () => {
    mainContent.style.display = "none";
    spellContent.style.display = "block";
    backButton.style.display = "block";
    fetchPegasus();
  });

  function fetchABD() {
    const abdURL = "https://www.dnd5eapi.co/api/monsters/adult-black-dragon";
    fetch(abdURL)
      .then((data) => {
        return data.json();
      })
      .then((completedata) => {
        document.getElementById("name").innerHTML = completedata.name;
        document.getElementById(
          "desc"
        ).innerHTML = `Size: ${completedata.size}`;
        document.getElementById(
          "high-level"
        ).innerHTML = `Type: ${completedata.type}`;
        document.getElementById(
          "range"
        ).innerHTML = `Alignment: ${completedata.alignment}`;
        document.getElementById(
          "aoe"
        ).innerHTML = `Armor Class:<br>* Type: ${completedata.armor_class[0].type} <br>* Value: ${completedata.armor_class[0].value}`;
      });
    image.src = "images/adult black dragon.webp";
    image.style.width = "50%";
    image.style.display = "block";
  }

  adultBlackDragonButton.addEventListener("click", () => {
    mainContent.style.display = "none";
    spellContent.style.display = "block";
    backButton.style.display = "block";
    fetchABD();
  });

  backButton.addEventListener("click", () => {
    mainContent.style.display = "block";
    spellContent.style.display = "none";
    backButton.style.display = "none";
  });
});
