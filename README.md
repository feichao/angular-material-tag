# ngMdTag
angular material tag.

### [demo](http://www.0xfc.cn/article/0/57e78a04a450230821a53872) ###
> ![demo](http://o8tapqn1p.bkt.clouddn.com/20160925-angular-material-tag.png)

**demo**

> demo/index.html

**dependencies**
> daterange-picker depends on angular, angular material, angular material icons.

**install**
> `bower install ngMdTag --save`

**how to use**

> styles:
> 1. angular-material.css
> 2. angular-material-icons.css
> 3. ng-md-tag.css

> scripts:
> 1. angular-material.js
> 2. angular-material-icons.js
> 3. ng-md-tag.js

> `app.module('app name','ngMdTag')`

**use like this**

> `<ng-md-tag orig-list="origList" label="Title：" pattern="^[0-9a-zA-Z.]+$" pattern-msg="error input" placeholder="please input something">
</ng-md-tag>`

**params**
> orig-list: original list
>
> label: title of ngMdTag
>
> pattern: input pattern
>
> pattern-msg: input pattern message
> 
> placeholder: input placeholder
