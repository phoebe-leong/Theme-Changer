# Theme-Changer
A JavaScript template for changing webpage themes

## What does the code do?
**For anyone who can't read my code, hopefully the following explanation will suffice:**
  
1. The themes are stored in an array called 'themes', and each element is an array which contains the theme's title, background colour, and text colour respectively. This array makes it easier to remove, add, and re-arrange themes.
2. When the screen is clicked, the theme counter (called currentThemeID) goes up by one. This is used to update the current theme.
3. Using currentThemeID, the theme's background colour and text colour are accessed and the current background colour and text colour are updated to display those changes.  
  
If the end of the theme array is reached, currentThemeID is reset to 0, the start of the array. Doing this loops the theme switching mechanism.
