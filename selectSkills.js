function selectSkills() {
  const skills_A = $("<div>").addClass("skills");
  const skills_B = $("<div>").addClass("skills");

  const container_A = $("#skills_container_A")
    .empty()
    .append($("<h3>").append("Player A"))
    .append(skills_A);
  const container_B = $("#skills_container_B")
    .empty()
    .append($("<h3>").append("Player B"))
    .append(skills_B);

  for (container of [skills_A, skills_B]) {
    addSkill(container, "Q", true, 3, [2, 4]);
    addSkill(container, "W", true, 4, [3, 5]);
    addSkill(container, "Weapon passive", false, 3, [4]);
    addSkill(container, "R", true, 3, [4]);
    addSkill(container, "Armor passive", false, 3, [4]);
    addSkill(container, "D", true, 3, [4]);
    addSkill(container, "Hat passive", false, 3, [4]);
    addSkill(container, "F", true, 3, [4]);
    addSkill(container, "Shoes passive", false, 3, [4]);
  }
}

function addSkill(
  container,
  skillName,
  isActive,
  expectedOptions,
  altOptionsList
) {
  const skill = $("<div>")
    .addClass("skill")
    .addClass(isActive ? "activeSkill" : "passiveSkill")
    .append($("<div>").addClass("skillName").append(skillName))
    .append(
      $("<div>")
        .addClass("skillSelection")
        .append(`${rnd(1, expectedOptions)}/${expectedOptions}`)
    );
  for (const opt of altOptionsList) {
    skill.append(
      $("<div>")
        .addClass("altSkillSelection")
        .append(`${rnd(1, opt)}/${opt}`)
    );
  }

  container.append(skill);
}

function rnd(min, max) {
    return Math.random() * (max +1 - min) + min |0;
}
