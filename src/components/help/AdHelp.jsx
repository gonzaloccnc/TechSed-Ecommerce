import Button from '../button/Button'

const AdHelp = () => {
  return (
    <section className='bg-black flex'>
      <div className='w-[45%] bg-black text-white p-24 flex flex-col gap-8 clippy'>
        <h1 className='text-3xl font-semibold'>Need Help? Check<br />Out Our Help Center</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
        </p>
        <Button path='helpCenter' w='w-44' hover>Go to Help Center</Button>
      </div>
      <div className='w-[55%] clip-help' />
    </section>
  )
}

export default AdHelp
