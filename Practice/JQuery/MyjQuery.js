//syntax : $('selector(#id)(.class)').action()

//Use document.ready() to run js only after the document has been loaded :
//$ is the shortcut of $(document).ready() 
$(document).ready(function () {

    // $('#hello').text('Final text');
    // $('p').click(function () {
    //     $(this).hide()   //To hide the p tag we are selecting and not hide everything
    // })


    //NOTES
    //There are 3 types of selectors in jQuery
    //1. Element selector : 
    //$('p').click(function () { console.log("hello") })
    //$('p').click(function () { $('p').hide()})
    //=> this will display log for all the p tags in the code
    //2. ID selector :
    //$('#second').click(function () { console.log("You clicked on second p", this)}) //"this" will return the element
    //3. Class selector
    //$('.odd').click(function(){console.log("You clicked on odd p")})
    //4. Other selectors
    //i. $('*') : will take into account all the elements
    //ii. $('p.odd') : selects all the paragraphs with classname odd
    //iii. $('p:first') : will select the first paragraph
    //console.log("NewFile");


    //EVENTS in jQuery
    //1. Mouse events : click, dbclick, mouseenter, mouseleave, hover, mouseup(on clicking any mouse button), mousedown(on releasing any mouse button)
    // $('p').dblclick(function () {
    //     $(this).hide(); //this will hide the p tag on double clicking it 
    // })

    // $('p').mouseenter(function () {
    //     console.log("You entered", this) //this will hide the p tag on double clicking it 
    // })

    //2. Key events : keypress, keydown, MediaKeyStatusMap
    //3. Form events : submit, change, focus, blur
    //4. Document/ window events = load, resize, scroll, unload

    //Demonstrating the on method (for adding multiple events)
    // $('p').on({
    //     click: function () { console.log("P tag clicked") },
    //     mouseenter: function () { console.log("You hovered on", this) }
    // })

    //HIDE & SHOW events
    // these take 2 arguments
    //1. the time to be taken to hide or show
    //2. Callback function which is executed after something is hidden or displayed
    // $('#lorem').hide(1000, function(){
    //     console.log("Hidden");
    // })
    // $('#lorem').show(1000, function(){
    //     console.log("Showed");
    // })
    // $('#but').click(function(){
        // $('#lorem').toggle(1000); //toggles hide and show methods
        // $('#lorem').fadeToggle(1000);
    // })
    //fadeIn(), fadeOut(), fadeToggle(), fadeTo()

    //SLIDE METHODS (takes 2 arg. speed and callback)
    // $('#lorem').slideUp(1000);
    // $('#lorem').slideDown(1000);
    // $('#lorem').slideToggle(1000);


    //ANIMATE FUNCTION IN JQUERY 
    // $('#lorem').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width : '150px'

    // }, "fast");

    //To stop the animation midway throught, we can use $('#lorem).stop() method

    //Like innerHTML in js, we can use html in jQuery and set the new elements
    // $('body').html("This is the new body");

    //For setting the form fields, html doesnt work so you can use .val()

    // $('#ta').val("New text")
    //$('#ta').val("New text")  //to get the value of that textarea

    //To empty the contents of an element 
    // $('#lorem').empty()

    //To set new text
    // $('#lorem').text("NO")

    //To remove an element
    // $('#lorem').remove()

    //To add a new class to an element
    // $('#lorem').addClass("MyClass")
    // $('#lorem').removeClass("MyClass")

    //To add css to elements
    // $('#lorem').css('background-color', 'red')

    //To get value of css elements
    // $('#lorem').css('background-color')
});