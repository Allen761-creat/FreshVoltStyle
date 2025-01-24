
const Singleuserdetails = ({user}) => {
   
  return (
    <div className='dark:bg-gray-900 dark:text-white' >
      <div className=" mt-3  overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-2  sm:px-6">
        <div className='h-[40px] gap-2    flex w-[40px]'>
<img className='w-full h-full'
           src={
             user && user.profilepic
               ? `http://localhost:8080${user.profilepic}`
               : user && user.gender === 'male'
               ? '/img/men avtar.jpg'
               : user &&user.gender === 'female'
               ? '/img/women avtar.jpg'
               : '/img/dp.png'
           }
           alt={user && user.name}/>
 <h3 className="text-lg whitespace-nowrap mt-3  leading-6 font-medium ">
{user && user.name}
</h3> 
</div> 
          <p className="mt-1 max-w-2xl text-sm ">
            {user && user.shortdescription}
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-2 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Username</dt>
              <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                {user && user.username}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Email address</dt>
              <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                {user && user.email}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Phone number</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                {user && user.phone ? user.phone : "N/A"}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Address</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                {user && (user.address && user.city) ? `${user.address}, ${user.city}` : "N/A"}
              </dd>
            </div>

            {/* Status Section */}
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Status</dt>
              <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                {user && user.isverified ? "Verified" : "Not Verified"}
              </dd>
            </div>

            {/* Role Section */}
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium ">Role</dt>
              <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                {user && user.role }
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  )
}

export default Singleuserdetails
