# Traveller - Smart front end take-home technical test

Hello there! This is my submission of the smart pension take home FE test. I enjoyed it! The stack makes it quite easy to work on (love the hotloading), and I appreciate the choice between GraphQL and REST

### About the test

- I enjoyed using chakra, haven't used before but it's pretty similar to material-ui.
- I had to change my node version to exactly 14.16.0, despite the package.json saying ^14.16.0 and me being on 14.2.0
- I changed the API package only very slightly, I thought it may be out of scope for this test to implement a DB, so any changes to the data is stored in memory while the server is up. I thought about using session storage to make changes persistent but I thought that would be a bad use of the session.

### Things I would improve/refactor about my code in hindsight

- I didn't implement tests for all components, would add more and do some mocking of requests
- I would simplify the state of components by implementing a store for the cities data, probably using React's context, there is currently too much passing down props
- I would make it prettier

Cheers,
Harry
