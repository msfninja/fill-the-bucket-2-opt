<h1 align="center">Fill The Bucket 2 (Optimised)</h1>

This is an optimised version of the game [Fill The Bucket 2](https://github.com/lab-swapnil/lab-swapnil.github.io/tree/main/games/fill-the-bucket-II), originally
made by [SwapniL](https://github.com/lab-swapnil).

To play it, you have to compile and minify the style sheet and
script.

## Compiling the Style Sheet

To compile the style sheet using `sass`, issue the below command in
your shell (given you are in the relevant working directory).

```bash
sass --style compressed style.scss style.min.css
```

This will leave you with `style.min.css` and `style.min.css.map`. You
don't need to do anything else, the `index.html` file will import the
right file automatically.

## Minifying the Script

To minify the script (`main.js`) using `minify`, issue the below
command in your shell (given you are in the relevant working
directory).

```bash
minify --js main.js > main.min.js
```

This will leave you with `main.min.js` and as with the style sheets,
no further action is required. The `index.html` file will import the
right file.

## Playing

After compiling and minifying all that is necessary, you can play the
game by simply opening the `index.html` file in your browser. You
will get to see instructions on playing the game onscreen.
