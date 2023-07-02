const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname +"/date.js");


const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


var item=["Cook Food","Buy Food","Eat Food"];
let workItems=[];

day = "";


app.get("/", function (req, res) {

  let day = date.getDate();
  res.render("list", { listTitle: day ,newListItem:item});
});



app.post("/",function(req,res)
{
    // console.log(req.body);
    if(req.body.list==="Work")
    {
      workItems.push(req.body.todo);
      res.redirect("/work")

    }
    else
    {
     item.push(req.body.todo);

    }
    res.redirect("/");
})


app.get("/work",function(req,res)
{
    res.render("list",{listTitle:"Work List",newListItem:workItems});
});


app.get("/about",function(req,res)
{
  res.render("about");
})

app.post("/work",function(req,res)
{f
    let item=req.body.todo;
    workItems.push(item);
    res.redirect("/work")
}
)












app.listen(3000, function () {
  console.log("Server has started 3000");
});
