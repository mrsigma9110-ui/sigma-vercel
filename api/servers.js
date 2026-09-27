let store = [
  {name:"SERVER 1",url:"https://sigma-md.up.railway.app",online:true},
  {name:"SERVER 2",url:"https://sigma-md2.up.railway.app",online:true}
];
export default function handler(req,res){
  res.setHeader("Cache-Control","no-store");
  return res.status(200).json({servers:store});
}