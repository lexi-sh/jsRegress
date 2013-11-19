#jsRegress [![Build Status](https://travis-ci.org/cjqed/jsRegress.png?branch=master)](https://travis-ci.org/cjqed/jsRegress)

jsRegress is a statistics library for node.js.

##Currently working
* Univariate statistics
    * Mean
    * Standard deviation
* ANOVA
    * [Completely randomized design](https://github.com/cjqed/jsRegress/wiki/Anova---Completely-Randomized-Design)
* Regression
    * Multiple linear regression

##Planned features

* Univariate statistics
* Multivariate statistics
* Regression
* More ANOVA
* Non-parametric statistics
* Categorical Data Analysis

##Why a statistical package in node?

Yes, you could get all this and more in R or SAS and yes computing the Mann-Whitney U in SAS will probably be quicker than computing it in a single-threaded node.js instance. However, sometimes you don't need the best performance, and sometimes you just want to stay in node. This library is for people running statistical tests as a part of a larger Node.js system. Or it's for people that just love javascript (Like I do!)
