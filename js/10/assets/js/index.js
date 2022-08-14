const main = $('<main></main>')
main.appendTo('body')

const block = $('<div class = "block"></div>').css({  })
block.appendTo(main)

const image = $(' <img src="assets/css/images/photo.png" alt="photo">').css({ height: "100%", width: "100%" })
const overlay = $('<div></div>').css({ position: "absolute", width: "100%", height: "100%", top: "0", left: "0", right: "0", bottom: "0", background: "rgba(41, 45, 62, 0.8)", zIndex: "2" })
image.appendTo(block)
overlay.appendTo(block)

const block1 = $('<div class = "block1"></div>')
block1.appendTo(block)

const head = $('<div class = "block1__head"></div>')
head.appendTo(block1)


let names = ["Information", "Ratings Info", "where to buy"]
const headItem1 = $('<div class = "block1__head__item"></div>')
$(`<a href=""><svg style = "width:24px; height: 22px"><use xlink:href="assets/css/images/sprite.svg#first-wh"/></svg><p class = "block1__head__text">${names[0]}</p></a>`).appendTo(headItem1)
headItem1.appendTo(head)
const headItem2 = $('<div class = "block1__head__item"></div>')
$(`<a href=""><svg style = "width:20px; height: 22px"><use xlink:href="assets/css/images/sprite.svg#second-wh"/></svg><p class = "block1__head__text">${names[1]}</p></a>`).appendTo(headItem2)
headItem2.appendTo(head)
const headItem3 = $('<div class = "block1__head__item"></div>')
$(`<a href=""><svg style = "width:24px; height: 22px"><use xlink:href="assets/css/images/sprite.svg#third-wh"/></svg><p class = "block1__head__text">${names[2]}</p></a>`).appendTo(headItem3)
headItem3.appendTo(head)

$(".block1__head__item").hover(function () {
    $(this).find(".block1__head__text").css({ color: "#8D91A3" })
    let newLink = $(this).find("use").attr("xlink:href").replace("-wh", "-hov")
    $(this).find("use").attr("xlink:href", newLink)
    },
    function () {
        $(".block1__head__text").css({ color: "white" })
        let newLink = $(this).find("use").attr("xlink:href").replace("-hov", "-wh")
        $(this).find("use").attr("xlink:href", newLink)
    })

const body = $('<div class = "block1__body"></div>')
body.appendTo(block1)

const bodyLeft = $('<div class = "block1__body__left"></div>')
bodyLeft.appendTo(body)

$('<img src="assets/css/images/image.png" alt="image">').appendTo(bodyLeft)
const setStars = $('<div class = "block1__body__left__stars"></div>')
$(`<svg class = "star" id = "1" style = "width:20px; height:20px"> <use xlink:href="assets/css/images/sprite.svg#star-gr"/></svg>`).appendTo(setStars)
$(`<svg class = "star" id = "2" style = "width:20px; height:20px"> <use xlink:href="assets/css/images/sprite.svg#star-gr"/></svg>`).appendTo(setStars)
$(`<svg class = "star" id = "3" style = "width:20px; height:20px"> <use xlink:href="assets/css/images/sprite.svg#star-gr"/></svg>`).appendTo(setStars)
$(`<svg class = "star" id = "4" style = "width:20px; height:20px"> <use xlink:href="assets/css/images/sprite.svg#star-gr"/></svg>`).appendTo(setStars)
$(`<svg class = "star" id = "5" style = "width:20px; height:20px"> <use xlink:href="assets/css/images/sprite.svg#star-gr"/></svg>`).appendTo(setStars)
setStars.appendTo(bodyLeft)

function lightStars() {
    $("#1").hover(function() {
        let newLinkForRest = $(".star").find("use").attr("xlink:href").replace("-yell", "-gr")
        $(".star").find("use").attr("xlink:href", newLinkForRest)

        let newLink = $("#1").find("use").attr("xlink:href").replace("-gr", "-yell")
        $("#1").find("use").attr("xlink:href", newLink)
    },
    function(){
        let newLinkForRest = $(".star").find("use").attr("xlink:href").replace("-yell", "-gr")
        $(".star").find("use").attr("xlink:href", newLinkForRest)
    }),

    $("#2").hover(function() {
        let newLinkForRest = $(".star").find("use").attr("xlink:href").replace("-yell", "-gr")
        $(".star").find("use").attr("xlink:href", newLinkForRest)

        let newLink = $("#1, #2").find("use").attr("xlink:href").replace("-gr", "-yell")
        $("#1, #2").find("use").attr("xlink:href", newLink)
    })

    $("#3").hover(function() {
        let newLinkForRest = $(".star").find("use").attr("xlink:href").replace("-yell", "-gr")
        $(".star").find("use").attr("xlink:href", newLinkForRest)

        let newLink = $("#1, #2, #3").find("use").attr("xlink:href").replace("-gr", "-yell")
        $("#1, #2, #3").find("use").attr("xlink:href", newLink)
    })

    $("#4").hover(function() {
        let newLinkForRest = $(".star").find("use").attr("xlink:href").replace("-yell", "-gr")
        $(".star").find("use").attr("xlink:href", newLinkForRest)

        let newLink = $("#1, #2, #3, #4").find("use").attr("xlink:href").replace("-gr", "-yell")
        $("#1, #2, #3, #4").find("use").attr("xlink:href", newLink)
    })

    $("#5").hover(function() {
        let newLinkForRest = $(".star").find("use").attr("xlink:href").replace("-yell", "-gr")
        $(".star").find("use").attr("xlink:href", newLinkForRest)

        let newLink = $("#1, #2, #3, #4, #5").find("use").attr("xlink:href").replace("-gr", "-yell")
        $("#1, #2, #3, #4, #5").find("use").attr("xlink:href", newLink)
    })

    }
lightStars()    

const bodyRight = $('<div class = "block1__body__right"></div>')
bodyRight.appendTo(body)

const firstBlock = $('<div class = "block1__body__right__first"></div>')
const firstBlockText = $('<div class = "block1__body__right__first__text"></div>')
const header = $('<h2 class = "block1__body__right__first__text__header">FarCry 6</h2>')
const text1 = $('<p>First Released Oct 6, 2021</p>')
header.appendTo(firstBlockText)
text1.appendTo(firstBlockText)
firstBlockText.appendTo(firstBlock)
firstBlock.appendTo(bodyRight)

const graph = $('<div id="circle"></div>')
graph.appendTo(firstBlock)

const myCircle = new PercentChart("circle", {
    textDuration: '.1s',
    chartDuration: '2s',
    data:{
      // 10%
      percent: 87,
      // text & number displayed inside the circle
      actual: 8.7,
    }
})

const secondBlock = $('<div class = "block1__body__right__second">Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto. It is the sixth main installment in the Far Cry series and the successor Far Cry 5.</div>')
secondBlock.appendTo(bodyRight)

const thirdBlock = $('<div class = "block1__body__right__third"></div>')
thirdBlock.appendTo(bodyRight)

const price = $('<p class = "block1__body__right__third__price">$59.96</p>')
const discount = $('<p class = "block1__body__right__third__disc">20% OFF!</p>')
const wrapper = $('<div></div>')
wrapper.appendTo(thirdBlock)
discount.appendTo(wrapper)
price.appendTo(wrapper)

const btn = $('<button class = "block1__body__right__third__btn" type = "button">Buy it now</button>')
btn.appendTo(thirdBlock)
