import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";



const AboutCard = () => {
  return (
    <div>
      <Card>
  <CardHeader>
    <CardTitle>About us</CardTitle>
    <CardDescription>Our story</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Dynamic Solution was born from the shared vision of two ambitious North Carolina State University (NCSU) students, who recognized the transformative potential of machine learning but were also aware of its underutilization in the small business sector. Driven by a passion to democratize access to these cutting-edge technologies, the founders embarked on a mission to make machine learning solutions accessible, affordable, and tailored to the unique challenges faced by small businesses. </p>
  </CardContent>
  <CardFooter>
    <p></p>
  </CardFooter>
</Card>
    </div>
  )
}

export default AboutCard

