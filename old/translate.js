function translit(word) {
  const converter = {
'ZH': 'Ж', 'zh': 'ж',
'TS': 'Ц',	'ts': 'ц',
'CH': 'Ч',	'ch': 'ч',
'SH': 'Ш',	'sh': 'ш',
'YU': 'Ю',	'yu': 'ю',
'YA': 'Я',	'ya': 'я',
'TH': 'З',	'th': 'з',
'A': 'А',	'a': 'а',
'B': 'Б',	'b': 'б',
'C': 'К',	'c': 'к',
'D': 'Д',	'd': 'д',
'E': 'Е',	'e': 'е',
'F': 'Ф',	'f': 'ф',
'G': 'Г',	'g': 'г',
'H': 'Х',	'h': 'х',
'I': 'І',	'i': 'і',
'J': 'ДЖ',	'j': 'дж',
'K': 'К',	'k': 'к',
'L': 'Л',	'l': 'л',
'M': 'М',	'm': 'м',
'N': 'Н',	'n': 'н',
'O': 'О',	'o': 'о',
'P': 'П',	'p': 'п',
'Q': 'КУ',	'q': 'ку',
'R': 'Р',	'r': 'р',
'S': 'С',	's': 'с',
'T': 'Т',	't': 'т',
'U': 'У',	'u': 'у',
'V': 'В',	'v': 'в',
'W': 'В',	'w': 'в',
'X': 'КС',	'x': 'кс',
'Y': 'И',	'y': 'и',
'Z': 'З',	'z': 'з',

"'":'',"'":'',
  };

  for (const [key, value] of Object.entries(converter)) {
    word = word.replaceAll(key, value);
  }

  return word;
}

function translit1(word1) {
  const converter1 = {
'А': 'A',	'а': 'a',
'Б': 'B',	'б': 'b',
'В': 'V',	'в': 'v',
'Г': 'G',	'г': 'g',
'Д': 'D',	'д': 'd',
'Е': 'E',	'е': 'e',
'Ё': 'E',	'ё': 'e',
'Ж': 'ZH',	'ж': 'zh',
'З': 'Z',	'з': 'z',
'И': 'I',	'и': 'i',
'Й': 'Y',	'й': 'y',
'К': 'K',	'к': 'k',
'Л': 'L',	'л': 'l',
'М': 'M',	'м': 'm',
'Н': 'N',	'н': 'n',
'О': 'O',	'о': 'o',
'П': 'P',	'п': 'p',
'Р': 'R',	'р': 'r',
'С': 'S',	'с': 's',
'Т': 'T',	'т': 't',
'У': 'U',	'у': 'u',
'Ф': 'F',	'ф': 'f',
'Х': 'KH',	'х': 'kh',
'Ц': 'TS',	'ц': 'ts',
'Ч': 'CH',	'ч': 'ch',
'Ш': 'SH',	'ш': 'sh',
'Щ': 'SCH',	'щ': 'sch',
'Ъ': '',	'ъ': '',
'Ы': 'Y',	'ы': 'y',
'Ь': '',	'ь': '',
'Э': 'E',	'э': 'e',
'Ю': 'YU',	'ю': 'yu',
'Я': 'YA',	'я': 'ya',
'Ґ': 'G',	'ґ': 'g',
'Є': 'E',	'є': 'e',
'І': 'I',	'і': 'i',
'Ї': 'YI',	'ї': 'yi',

"'":'',"'":'',
  };

  for (const [key, value] of Object.entries(converter1)) {
    word1 = word1.replaceAll(key, value);
  }

  return word1;
}






