export class Experience {
  public company: string = '';
  public specs: Specs[] = [];

  public preprareExperienceModel(company: string, specs: Specs[]) {
    let newExp = new Experience();
    newExp.company = company;
    newExp.specs = specs;
    return newExp;
  }
}

export class Specs {
  public designation: string = '';
  public skills: string = '';
  public roles: string = '';

  public prepareSpecs(designation: string, skills: string, roles: string) {
    let newSpec = new Specs();
    newSpec.designation = designation;
    newSpec.skills = skills;
    newSpec.roles = roles;
    return newSpec;
  }
}

export class Education {
  public institution: string = '';
  public standards: Standard[] = [];

  public prepareEducationModel(institution: string, standards: Standard[]) {
    let newEducate = new Education();
    newEducate.institution = institution;
    newEducate.standards = standards;
    return newEducate;
  }
}

export class Standard {
  public medium: string = '';
  public marks: string = '';
  public activities: string = '';

  public prepareStandard(medium: string, marks: string, activities: string) {
    let newStd = new Standard();
    newStd.medium = medium;
    newStd.marks = marks;
    newStd.activities = activities;
    return newStd;
  }
}
