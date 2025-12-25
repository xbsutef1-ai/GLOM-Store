
const token=localStorage.token;
function loadOrders(){
 fetch('/api/admin/orders',{headers:{Authorization:'Bearer '+token}})
 .then(r=>r.json()).then(d=>out.textContent=JSON.stringify(d,null,2));
}
function addCoupon(){
 fetch('/api/admin/coupon',{method:'POST',headers:{
 'Content-Type':'application/json',
 'Authorization':'Bearer '+token
 },body:JSON.stringify({code:'TEST10',type:'percent',value:10})});
}
