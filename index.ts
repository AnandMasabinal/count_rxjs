import { fromEvent } from 'rxjs'; 
import { map,buffer,throttleTime,filter} from 'rxjs/operators';


const clicks=fromEvent(document,'click');
clicks
.pipe(
  buffer(clicks.pipe(throttleTime(250))),
  filter(clickArray=>clickArray.length>1)

)
.subscribe(x=>console.log(x));