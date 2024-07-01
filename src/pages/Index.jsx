function Index() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Stories</h2>
        <div className="flex gap-4 overflow-x-auto">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gray-300"></div>
            <p className="text-sm">You</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gray-300"></div>
            <p className="text-sm">zidanrio</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gray-300"></div>
            <p className="text-sm">alihusni</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gray-300"></div>
            <p className="text-sm">Fakeh</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gray-300"></div>
            <p className="text-sm">Desy</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Posts</h2>
        <div className="mb-4 p-4 border rounded-lg">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold">Alvin Elian</p>
              <p className="text-sm text-gray-500">3 minutes ago</p>
            </div>
          </div>
          <div className="mb-2">
            <p>This is my latest product kit for website landing page, dashboard, and mobile exploration about coffee shop called Kopiku.</p>
          </div>
          <div className="flex gap-2">
            <div className="h-24 w-24 bg-gray-300"></div>
            <div className="h-24 w-24 bg-gray-300"></div>
            <div className="h-24 w-24 bg-gray-300"></div>
            <div className="h-24 w-24 bg-gray-300"></div>
          </div>
          <div className="mt-2 flex gap-4">
            <button className="text-blue-500">Like</button>
            <button className="text-blue-500">Comment</button>
            <button className="text-blue-500">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;