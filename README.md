#jsRegress [![Build Status](https://travis-ci.org/cjqed/jsRegress.png?branch=master)](https://travis-ci.org/cjqed/jsRegress)

jsRegress is a statistics library for node.js. Still very much under development. All working features tested for accuracy.

`npm install jsregress`

##Currently working
* [Univariate statistics](https://github.com/cjqed/jsRegress/wiki/Univariate)
    * Mean
    * Standard deviation
* ANOVA
    * [Completely randomized design](https://github.com/cjqed/jsRegress/wiki/Anova---Completely-Randomized-Design)
* Regression
    * [Multiple linear regression](https://github.com/cjqed/jsRegress/wiki/Multiple-Linear-Regression)
* Non-parametrics
    * [Mann-Whitney U](https://github.com/cjqed/jsRegress/wiki/Mann-Whitney-U)

##Planned features

* Univariate statistics
* Multivariate statistics
* Regression
* More ANOVA
* Non-parametric statistics
* Categorical Data Analysis

##Why a statistical package in node?

Yes, you could get all this and more in R or SAS and yes computing the Mann-Whitney U in SAS will probably be quicker than computing it in a single-threaded node.js instance. However, sometimes you don't need the best performance, and sometimes you just want to stay in node. This library is for people running statistical tests as a part of a larger Node.js system. Or it's for people that just love javascript (Like I do!)
