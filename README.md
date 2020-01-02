## Intro and important issues

The WTP blog was taken from Wordpress and converted to Jekyll using the Jekyll import function ([instructions here](https://import.jekyllrb.com/docs/wordpressdotcom/)).  Wordpress provides an XML export (several of which can be found in the [xml](https://github.com/cpldc/wethepeople/tree/master/xml) folder), which can be imported to Jekyll quite easily.  Unfortunately, over WTP's 20 year run, web standards changed, so a great deal of cleanup was required.  

This was primarily accomplished with bash scripting, using grep, sed, and regular expressions.  The [_posts_orig](https://github.com/cpldc/wethepeople/tree/master/_posts_orig) folder contains the original versions of all the post files, the way they were when they were initially imported into Jekyll from Wordpress.

Most of the problems won't come up again, but the ghosts of those changes can be seen in the shell scripts peppered around, mostly found in the [_posts](https://github.com/cpldc/wethepeople/tree/master/_posts) and [xml](https://github.com/cpldc/wethepeople/tree/master/xml) folders.  None of them are currently required, and retained solely in case the history of the process needs to be examined.

## To edit & develop: 

You will need to install the Ruby programming language before installing Jekyll.  Detailed instructions can be found [here](https://jekyllrb.com/docs/installation/).  You will also need code editing software.  I recommend [VS Code](https://code.visualstudio.com/), which is open source, free of charge, and can be installed without administrative privileges.

Details about the folder structure and file organization of a Jekyll site can be found at the [cpldc-jekyll readme](https://github.com/cpldc/cpldc-jekyll/blob/master/README.md), but, as this content is archived, there shouldn't be frequent needs to update this repo.

## Updating PDF Links

The primary task which will need to be completed as WTP goes live is to update the links to the PDFs.  Currently, the issues live on the 'issues.html' page, which is constructed from the [issues.md](https://github.com/cpldc/wethepeople/blob/master/issues.md) file.  The current links, to the issuu.com instances of the issues, are clearly visible, and, unfortunately, there's no easy way to update them all; they will have to be changed individually.  

Another note: a number of the images from the wethepeople.com site were not found when I attempted to download them.  The list of missing images can be found in the [missing pictures](https://github.com/cpldc/wethepeople/blob/master/xml/missingpictures.txt) file.