export class Project {
  public projName: string = '';
  public duration: string = '';
  public techUsed: string = '';
  public description: string = '';
  public domain: string = '';

  public prepareProj(projName: string, duration: string, techUsed: string, description: string, domain: string) {
    let newProj = new Project();
    newProj.projName = projName;
    newProj.duration = duration;
    newProj.techUsed = techUsed;
    newProj.description = description;
    newProj.domain = domain;
    return newProj;
  }
}

export class Certificate {
  public certName: string = '';
  public issuedBy: string = '';
  public issuedDt: string = '';

  public prepareCert(certName: string, issuedBy: string, issuedDt: string) {
    let newCert = new Certificate();
    newCert.certName = certName;
    newCert.issuedBy = issuedBy;
    newCert.issuedDt = issuedDt;
    return newCert;
  }
}
