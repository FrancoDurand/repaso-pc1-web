/* 
"country_name": "Afghanistan",
"iso-3166": "AF",
"total_holidays": 24,
"supported_languages": 2,
"uuid": "f0357a3f154bc2ffe2bff55055457068",
"flag_unicode": "🇦🇫" 
*/

export class Country {
    constructor(country_name, iso_3166, total_holidays, supported_languages, uuid, flag_unicode) {
        this.country_name = country_name;
        this.iso_3166 = iso_3166;
        this.total_holidays = total_holidays;
        this.supported_languages = supported_languages;
        this.uuid = uuid;
        this.flag_unicode = flag_unicode;
    }
}