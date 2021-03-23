class Statistic {

  constructor(x, xtitle, y, ytitle, correlationR) {
    this.x = x;
    this.y = y;
    this.xtitle = xtitle;
    this.ytitle = ytitle;
    this.r = correlationR;
  }

  getSumX(){
  	let sum = 0;
    for (let i = 0; i < this.x.length; i++){
    	sum += this.x[i];
    }
    return sum;
  }

  getSumY(){
  	let sum = 0;
    for (let i = 0; i < this.y.length; i++){
    	sum += this.y[i];
    }
    return sum;
  }

  getSumX2(){
  	let sum = 0;
    for (let i = 0; i < this.x.length; i++){
    	sum += this.x[i]*this.x[i];
    }
    return sum;
  }

  getSumY2(){
  	let sum = 0;
    for (let i = 0; i < this.y.length; i++){
    	sum += this.y[i]*this.y[i];
    }
    return sum;
  }

  getSumXY(){
  	let sum = 0;
    for (let i = 0; i < this.y.length; i++){
    	sum += this.y[i]*this.x[i];
    	}
    return sum;
	}

	getN(){
		return this.x.length;
	}

  getVarianceXY(){
  	let variance = 0;
    return ( this.getSumXY() - ( this.getSumX() * this.getSumY())/this.getN() );
  }

  getVarianceXX(){
    return ( this.getSumX2() - ( this.getSumX() * this.getSumX())/this.getN() );
  }

  getVarianceYY(){
    return ( this.getSumY2() - ( this.getSumY() * this.getSumY())/this.getN() );
  }

  getRvalue(){
  	return ( this.getVarianceXY()/Math.sqrt(this.getVarianceXX()*this.getVarianceYY()) );
  }


}


const correlationCalculator = (stat) =>{
	stat.r = stat.getRvalue();
	let correlationValue = stat.r;
	switch(true){
		case (correlationValue > 1):
			return "perfect and positive";
			break;
		case (correlationValue > 0.8):
			return "positive and very strong";
			break;
		case (correlationValue > 0.6):
			return "positive and strong";
			break;
		case (correlationValue > 0.4):
			return "moderate and positive";
			break;
		case (correlationValue > 0.2):
			return "weak and is very unlikely to have association";
			break;
		case (correlationValue > 0):
			return "inexistent";
			break;
		case (correlationValue < -1):
			return "perfect and negative";
			break;
		case (correlationValue < -0.8):
			return "negative and very strong";
			break;
		case (correlationValue < -0.6):
			return "negative and strong";
			break;
		case (correlationValue < -0.4):
			return "moderate and negative";
			break;
		case (correlationValue < -0.2):
			return "weak and is very unlikely to have association";
			break;
		case (correlationValue > -0.2):
			return "inexistent";
			break;
	}

}

const ans = (stat) => {
	let answer = "Your correlation of " + stat.ytitle + " in function of " + stat.xtitle + " is: ";
	answer += correlationCalculator(stat);
	console.log(`R: ${stat.r}`)
	console.log(answer);
}

let landArea = [97813.01,9616.36,68.34,665384.04,70698.32,77115.68,2488.72,1544.89,147039.71,35379.74,9349.16,10931.72,24230.04,83568.95,77347.81,121590.30,82278.36,48431.78,53178.55,110571.82,56272.81,5325,84896.88,5543.41,69898.87,98378.54,40407.80,52378.13,52420,32020.49,86935.83,104093.67,65496.38,12405.93,69706.99,36419.55,42144.25,10554.39,113990.30,71297.95,42774.93,8722.58,96713.51,53819.16,59425.15,44825.58,57913.55,46054,54554.98,65757.70,268596.46,163694.74];
let population = [582328,623347,712816,731158,765309,892717,986809,1057125,1080577,1350141,1366275,1407006,1784787,1826913,1937552,2106319,2913805,2966786,3030522,3138259,3163561,3194000,3249879,3557006,3980783,4241507,4477251,4645318,4921532,5218040,5657342,5807719,5832655,6055802,6151548,6754953,6886834,6893574,7421401,7693612,8590563,8882371,9966555,10600823,10710017,11693217,12587530,12783254,19336776,21733312,29360759,39368078];
let GDP =[36000000000,33278000000,144653000000,50413000000,54044000000,55243000000,76468000000,61081000000,51934000000,67129000000,86319000000,89866000000,74511000000,85552000000,129761000000,100777000000,175465000000,115900000000,130709000000,175509000000,195353000000,104989000000,198630000000,283601000000,186883000000,253849000000,213169000000,244577000000,228062000000,245473000000,379388000000,394271000000,344500000000,427616000000,325841000000,379293000000,369063000000,590307000000,378297000000,632013000000,557986000000,625659000000,524828000000,594126000000,627667000000,683460000000,875671000000,788500000000,1705127000000,1111614000000,1772132000000,3120386000000]
mystat = new Statistic(landArea, "land area", GDP, "GDP", 0);
ans(mystat);
