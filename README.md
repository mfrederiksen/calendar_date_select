# CalendarDateSelect

Legacy support as a Rails 3.1+ Engine.

This gem is **no longer maintained**, use at your own risk. Enquire if you want to take over maintenance. In the meanwhile, obviously good PRs might be merged in, but don't expect anybody to fix bugs.

# How to Contribute to Nulogy's fork

Do not change the `calendar_date_select.js` file located inside the `app/assets` folder, because it is an automatically generated file.

* Create a branch
* Make the desired changes to the `calendar_date_select.js` file that is located in the `src` folder.
* Run `yarn build`. This will generate the transpiled version of the file inside the `app/assets` folder.
* Bump the version of the gem. Please refer to [SemVer](https://semver.org/).
* Merge your branch into main.
