import { DateUtils } from './date-utils';

describe('DateUtils', () => {

  describe('parse', () => {
    it('should return a Date when parse the timestamp', () => {
      // setup
      const timestamp = '1551830399000';

      // execution
      const result = DateUtils.parse(timestamp);

      // assertion
      expect(result.toString().startsWith('Tue Mar 05 2019 23:59:59 GMT+0000 ')).toBeTruthy();
    });
    it('should return a Date when parse the epoch timestamp', () => {
      // setup
      const timestamp = '1551830399';

      // execution
      const result = DateUtils.parse(timestamp);

      // assertion
      expect(result.toString().startsWith('Tue Mar 05 2019 23:59:59 GMT+0000 ')).toBeTruthy();
    });

    it('should return a Date when parse date string with format "YYYY-MM-DDTHH:mm:ssZ"', () => {
      // setup
      const dateString = '2019-03-05T23:59:59Z';

      // execution
      const result = DateUtils.parse(dateString);

      // assertion
      expect(result.toString().startsWith('Tue Mar 05 2019 23:59:59 GMT+0000 ')).toBeTruthy();
    });

    it('should return a Date when parse date string with format "YYYY-MM-DDTHH:mm:ss.SSSZ"', () => {
      // setup
      const dateString = '2019-03-05T23:59:59.999Z';

      // execution
      const result = DateUtils.parse(dateString);

      // assertion
      expect(result.toString().startsWith('Tue Mar 05 2019 23:59:59 GMT+0000 ')).toBeTruthy();
    });

    // NON RFC2822
    it('should return a Date when parse date string with format "ddd MMM DD HH:mm:ss yyyy"', () => {
      // setup
      const dateString = 'Tue Mar 05 23:59:59 GMT 2019';

      // execution
      const result = DateUtils.parse(dateString);

      // assertion
      expect(result.toString().startsWith('Tue Mar 05 2019 23:59:59 GMT+0000 ')).toBeTruthy();
    });
    // NON RFC2822
    it('should return a Date when parse date string with format "ddd MMM DD HH:mm:ss.SSS yyyy"', () => {
      // setup
      const dateString = 'Tue Mar 05 23:59:59.999 GMT 2019';

      // execution
      const result = DateUtils.parse(dateString);

      // assertion
      expect(result.toString().startsWith('Tue Mar 05 2019 23:59:59 GMT+0000 ')).toBeTruthy();
    });

    // NON RFC2822
    it('should return a Date when parse date string with format "ddd MMM DD YYYY HH:mm:ss"', () => {
      // setup
      const dateString = 'Sat May 16 2020 20:15:03 GMT+0100 (Irish Standard Time)';

      // execution
      const result = DateUtils.parse(dateString);

      // assertion
      expect(result.toString().startsWith('Sat May 16 2020 20:15:03')).toBeTruthy();
    });

    it('should return null when the format is not valid', () => {
      // setup
      const dateString = 'gasfsdafsa';

      // execution
      const result = DateUtils.parse(dateString);

      // assertion
      expect(result).toBeNull();
    });
  });
});
