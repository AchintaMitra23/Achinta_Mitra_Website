export class BioData {
  public title: string = '';
  public desc: string = '';

  public prepareDesc(title: string, desc: string) {
    let newData = new BioData();
    newData.title = title;
    newData.desc = desc;
    return newData;
  }
}
