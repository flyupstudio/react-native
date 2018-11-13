
1) Clone project to folder
2) ```npm install``` 
3) Go to third party scripts to build on xCode run ```cd node_modules/react-native/third-party/glog-0.3.4```
 and after ```./configure```
 
4) on xCode if you see error on signalhandler.cc
      return  (void*)context->PC_FROM_UCONTEXT;
       please change to       return NULL;// (void*)context->PC_FROM_UCONTEXT;

5) To run app on mobile please allow my vlasenko.maxim@gmail.com
like authorized developer 
on
Open Settings on iPhone (2) and navigate to General -> Device Management, then select your Developer App certificate to trust it.
