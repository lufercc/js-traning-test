var SimpleformDemo = function(){
    this.types = {

        'Press':'press',
        'Internet':'net',
        'Word of mouth':?'mouth',
        'Other': ?'other'
    };
};

SimpleformDemo.prototype.changename= function(firstname){
    $('input[name="fullname"]').val(firstname);
};
SimpleformDemo.prototype.email = function(email){
    $('input[name="email"]').val(email);
};
SimpleformDemo.prototype.selectM = function(){
    $('#genderM').click();
};
SimpleformDemo.prototype.selectF = function(){
    $('#genderF').click();
};
SimpleformDemo.prototype.selecSkilling = function() {
    $('#hobby1').click()
};
SimpleformDemo.prototype.selectsrunning = function(){
    $('#hobby2').click()
};
SimpleformDemo.prototype.selectsEating = function(){
    $('#hobby3').click()
};
SimpleformDemo.prototype.selectssleeping = function(){
    $('#hobby4').click()
};
SimpleformDemo.prototype.selectreading = function(){
    $('#hobby5').click()
};
SimpleformDemo.prototype.selectcoding = function() {
    $('#hobby6').click()
};
SimpleformDemo.prototype.selectval= function(val){
    $('#heard').val(this.types[val]);
};
SimpleformDemo.prototype.changeText = function(messageinput){
    $('#message').val(messageinput);
};
SimpleformDemo.prototype.clicksubmitform = function()
{
    $('span[class="btn btn-default"]').click()
};


