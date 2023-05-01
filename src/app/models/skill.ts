export class ProgSkills {
  public skillName: string = '';
  public rating: number = 0;

  public preprareProgSkills(skillName: string, rating: number) {
    let newSkills = new ProgSkills();
    newSkills.skillName = skillName;
    newSkills.rating = rating;
    return newSkills;
  }
}

export class Subjects {
  public subjectName: string = '';
  public rating: number = 0;

  public preprareSubjects(subjectName: string, rating: number) {
    let newSubjects = new Subjects();
    newSubjects.subjectName = subjectName;
    newSubjects.rating = rating;
    return newSubjects;
  }
}

export class Technologies {
  public techName: string = '';
  public noOfProjDone: number = 0;
  public totalExp: number  = 0;

  public preprareTechs(techName: string, noOfProjDone: number, totalExp: number) {
    let newTechs = new Technologies();
    newTechs.techName = techName;
    newTechs.noOfProjDone = noOfProjDone;
    newTechs.totalExp = totalExp;
    return newTechs;
  }
}
