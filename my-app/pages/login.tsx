import LoginForm from '@/components/ui/login-form'
const login = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 -z-10 bg-no-repeat bg-cover bg-center"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80')" }}>
    <div className="w-full flex justify-center items-center flex-col min-h-screen ">
        <div className='bg-white p-8 rounded-sm border-solid border-black'>
      <LoginForm />
      </div>
      </div>
    </div>
  )
}

export default login
