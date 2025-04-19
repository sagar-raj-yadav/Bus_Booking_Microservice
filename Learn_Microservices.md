->Microservices = Ek large application ko multiple small, independent services mein todna — har service apna apna kaam alag karti hai.
->Each service develop , deploy and scale independently.
->Each services has its own database.

# How Services Communicate?
->services apas me interact karte h through API (like REST,gRpc,message broker like rabbitmq,kafka)
->Synchronous -> REST,gRpc
->Asynchronous-> rabitmq,kafka
->payment service send message to Notification service  via message broker.

-> client se jab request aata hai to sabse pehle API gateway ke through jata h.
->Ek service dusre service se mostly direct call (REST/gRPC or Message Queue) hota h.

Case	                                       How?
Client →  Service      	            Always via API Gateway
Service → Service	        Mostly direct call (REST/gRPC or Message Queue )


->API gateway- central point where all client request come.
ex:-NGINX,API umbrella ,Express gateway

# pub/sub 
ek service message publish karta hai and multiple service subscribe karke wo message sunte h.
✅ 1 sender → many receivers





# services Discovery?
->jab jab docker me container run hoga to uss service ko haar baar new IP assign hoga ,this is called dynamic IP.
->Agar tum haar baar same IP dena cahte ho to tm manually same IP de sakte ho.

Q.How one service discovery another service?
alag alag services different container me assgn hote h. to jab docker run hota h to ek new IP assign hota h.then how one service will find IP of other sevice.

solution:- service discovery
jab koi service start hota h to uss service ko register karna padta h and Baaki services ko batana ki yeh service ka IP/Port kya h.

Tools used for service discovery-> Eureka , Kubernetes has build in service discovery




