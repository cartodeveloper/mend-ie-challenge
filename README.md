# [MEND](https://www.mendfamily.com)

## Integration Engineer Coding Challenge

- Using the provided API, I use JavaScript to perform the following tasks:

  1. Retrieve the contests of the contact list from the API in the raw XML format.

  2. For the data inside Member, convert the data into JSON format like the object bellow:

  ```
  {
    "firstName": "First",
    "lastName": "Last",
    "fullName": "First Last",
    "chartId": "Contents of bioguide_id",
    "mobile": "Phone",
    "address": [
     {
      "street": "185 Dirksen Office Building",
      "city": "Washington",
      "state": "DC",
      "postal": 20510
      }
     ]
  }
  ```

  3.  Print the converted data.

---

## Set Up

1. Clone this repository to your local machine  
   ` git clone https://github.com/cartodeveloper/mend-ie-challenge.git ANY-NAME`

2. `cd ` into the project directory = cloned repository.

3. Make a fresh start of the git history with `rm -rf .git && git init`

4. Instal xml2json-light node module ` npm i xml2json-light --save`.

5. Run Js outsite the browser with this script `npm run server`.

6. Get the Object with the converted data print in the terminal.

---

## 👩‍💻 Contact

If you have any questions, please don't hesitate, and [Let's Connect!](https://linktr.ee/mtdev)
