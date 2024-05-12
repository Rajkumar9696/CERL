import React from 'react'

const Dashboard = () => {
  return (
    <div className=''>
      <div>
        <iframe
          style={{
            background: "#FFFFFF",
            border: "none",
            borderRadius: 2,
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",

          }}
          width={640}
          height={480}
          src="https://charts.mongodb.com/charts-project-0-thfyggk/embed/charts?id=6640872e-dc7a-47ad-8ab9-85bccaa20f5a&maxDataAge=3600&theme=light&autoRefresh=true"
        />

      </div>
    </div>

  )
}

export default Dashboard
