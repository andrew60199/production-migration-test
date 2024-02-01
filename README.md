# Production Migration Test Repository

## Description 

This repository was created to test how to go about manipulating seed data production database.

I hope this repository is helpful to someone in the same situation we were in.

## Problem

Our web app did not know that the initial seed file had been run.

## Discovery

Debugging our problem with this repository we discovered [Sequelize does not store seeder execution history by default](https://sequelize.org/docs/v6/other-topics/migrations/#running-seeds). 

## Solution

To store seeder execution we needed to add `seederStorage` option in the config file. Then we needed to comment out the initial `up` seed data and run the `run-all-seed` command in the web service. Finally we can then uncomment the data and any future seed files can be run without running those that have already been ran.

## Tags

Sequelize Production Database Seeders Storage