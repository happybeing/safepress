# SAFEpress
The SAFEpress project is actually two things:

- the SAFEpress application (a WordPress like content management system for SAFE Network)
- the SafeApp Web Framework (a noBackend Dreamcode API for building web apps on SAFE Network)

*SAFE Network is a new end-to-end encrypted, secure, decentralised internet. See http://safenetwork.io

## Status
Planning and prototyping, seeking collaborators for code, branding, design, documentation. 

Wanting to help is more important than a particular skill or experience, although obviously certain tasks need people with certains skills or ability to learn. Of course, if you do have experience and want to contribute (even just with guidance and feedback) please get in touch. If you're interested, take a look at the TODO list below, and if you want to help by doing something that's not there, add it to the list and submit the change as a pull request. 

Go on, make my day! :-)

### License: GPLv3

### Rewards

SAFE Network plans to reward popular applications automatically with Safecoin, its built in (non-blockchain <= very important!) crypto currency, but all contributions, work, and input provided to this project are entirely voluntary and will fall under the GPLv3 license.

If this project or application receives significant Safecoin rewards, either automatically from SAFE Network or directly from users, ways to distribute these amongst significant contributors can be discussed and I hope agreed. In the absence of agreement, or dissent by any parties, any and all rewards received by or on behalf of this project or application will be distributed at the discretion of theWebalyst.

### SAFEpress Documentation

- [SAFEpress Outline Design.md](https://github.com/theWebalyst/safepress/blob/master/design/SAFEpress-outline-design.md)

### Contact Points

Email:   team [ A T ] safepress.io

Website: http://safepress.io

SAFE Network Forum: http://forum.safenetwork.io

Launch post, and a good place for public discussion, especially with potential users:

- [A Web App that builds websites/blogs on SAFE Network](https://forum.safenetwork.io/t/a-web-app-that-builds-websites-blogs-on-safe-network/4417)

Slack: https://projectsafe.slack.com

## TODO - please extend, update, ?claim? (and submit as a PR)

- [ ] Prototyping
  - [x] write [SAFEpress Outline Design.md](https://github.com/theWebalyst/safepress/blob/master/design/SAFEpress-outline-design.md) for comment
  - [ ] research WordPress API and use to develop Dreamcode SAFEpress API for front-end web devs - @mvanzyl
  - [ ] design initial data types, structures, operations - @theWebalyst
  - [ ] design [dreamcode](http://nobackend.org/) front-end web app API (JavaScript) - @joshuef
    - [x] create basic react app for POC of UI
    - [ ] create chrome app for basic filesystem write upon post 'creation'
  - [ ] create (import?) dummy website data and store in CouchDB - ?owner?
  - [ ] generate additional data structures (indexes) from raw documents (posts/pages/comments)
    - write a script to do this by operating on the CouchDB (or better using one CouchDB to create another)

- [ ] Planning & Collaboration
  - [ ] set-up additional collaboration tools (e.g. Trello, Jira...) as appropriate. See [suggestions here](https://forum.safenetwork.io/t/a-web-app-that-builds-websites-blogs-on-safe-network/4417/7?u=happybeing)
  - [x] switch this task list over to Trello - Southside
  - [x] set initial target - @theWebalyst
    - basic dreamcode API plus simple website example (blog) working by time SAFE Network REST ready

- [ ] Branding & Graphic Design (start with SAFEpress but keep open to change later)
  - [ ] define tasks under this heading - ?owner?
  - [ ] ...

- [ ] Marketing
  - [x] Reserve safepress.io safepress.org safepress.community (redirect to safepress.io) - @theWebalyst
  - [x] Create placeholder website at http://safepress.io - @theWebalyst
  - [x] Reserve twitter a/c & configure (http://twitter.com/safepress - @theWebalyst
  - [ ] ...

- [ ] Other - feel free to extend/modify/?claim? this and above TODO list items and submit as a PR
  - [ ] ...
