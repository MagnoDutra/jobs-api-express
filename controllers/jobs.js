async function getAllJobs(req, res) {
  res.send("get all jobs");
}

async function getJob(req, res) {
  res.send("get a single job");
}

async function createJob(req, res) {
  res.send("create a job");
}

async function updateJob(req, res) {
  res.send("update a job");
}

async function deleteJob(req, res) {
  res.send("delete a job");
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
