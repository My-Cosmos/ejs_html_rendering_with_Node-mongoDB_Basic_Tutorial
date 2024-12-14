1) _id: ObjectId('some_random_number') 
<br>and 
2) __v: 0 

```
"_id" in mongodb database -> is created by mongoose which ensures that every _id should be unique
```

```
"__v: 0" in mongodb database -> is also created by mongoose which indicates that how many times a user is modified.
```

### .find() method
If there is a nonExisting condition given to .find() - method it returns -> **[]** - empty object.
### .findOne() method
returns -> **null** if the condition isn't matched.