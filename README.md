# Lunch & Learn - Sublime Text

## Plugins
* Miva IDE
* DefaultSyntax (installed manually)
* Rename Buffer
* Tabr
* Emmet
* Text Pastry

## RegEx Searching
```
(?x)
(?<=
# Place starting characters here (will not be included in the result).

)
.*? # Used to match any character between the "start" and "end" expressions (non-greedy).
(?=
# Place ending characters here (will not be included in the result).

)
```
#### RegEx Syntax/Documenation Resources:
[https://regex101.com/](https://regex101.com/)

*NOTE:* Make sure to use the PRCE engine as it's the closest to Sublime Text's custom one.