import momentImported from 'moment';
const moment = momentImported;

export class DateUtils {
  static parse(val: string | number): Date | null {
    let dateToParse: string | number = val;
    let result;
    if (!isNaN(val as any)) {
      const valText = '' + val;
      dateToParse = (valText.length === 10) ? Number.parseFloat(valText) * 1000 : Number.parseFloat(valText);
      result = moment(dateToParse);
    } else {
      // tslint:disable-next-line:max-line-length
      result = moment(dateToParse, ['ddd MMM DD YYYY HH:mm:ss', 'YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DDTHH:mm:ss.SSSZ', 'ddd MMM DD HH:mm:ss YYYY', 'ddd MMM DD HH:mm:ss.SSS yyyy']);
    }
    return (result.isValid()) ? result.toDate() : null;
  }
}