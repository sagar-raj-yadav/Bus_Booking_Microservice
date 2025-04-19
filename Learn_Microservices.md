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


->API gateway-> NGINX,API umbrella ,Express gateway
