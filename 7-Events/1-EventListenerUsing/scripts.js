// Event Listener


//bir olay yada event oluşturmak için öncelikle bir nesne seçmemiz gerekiyor
const btn =document.querySelector("#btnDeleteAll");
const btn2 =document.querySelector("#btnAddNewTask");
//Create an event

/*Anormous event diye de adlandırılır
btn.addEventListener('click',function(){
    console.log("btn clicked");
});
*/

/*
//dışarda yazılan bir fonksiyonu event ile ilişkilendirme
function btnClick(){
    console.log("btn-clicked");
}
btn.addEventListener("click",btnClick);
btn2.addEventListener("click",btnClick);

//Bir butona 2 tane olay eklenebilir. Yani yukarıda zaten btn ye click eventi eklemiştik
function btnClick2(){
    console.log("btn2-clicked");
}
btn.addEventListener("click",btnClick2);
*/

//********************************************************************** */
btn.addEventListener("click",function(e){

    let val;
    val=e;

    val=e.target; // olayı gerçekleştiren nesneyi bana veriyor. Yani burda hangi butonun tıklandığını bana geri döner.

    val= e.target.id; //tıklanan objenin id bilgisini alır
    val=e.target.classList;//tıklanan objenin bize getirdiği classListleri getirir.
    val = e.type;//event type ini verir. Burada event type: click.
    console.log(val);
    
    e.preventDefault(); // a etiketinin bir linke gitme özelliğini kaldırır
});