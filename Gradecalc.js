function student(grade){
switch (grade)
{
    case "A":
        console.log("excellent");
        break;
    case "B":
            console.log("Good");
            break;
    case "C":
           console.log("Pass");
          break;
    case "D":
           console.log("Need improve");
          break;

          default:
            console.log("invalid grade")

    

}
}
student("A");