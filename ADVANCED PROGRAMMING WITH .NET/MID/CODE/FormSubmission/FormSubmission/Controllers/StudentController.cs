using FormSubmission.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FormSubmission.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Create()
        {
          
            return View();
        }
    
        [HttpPost]
        public ActionResult Create(FormCollection fc, StudentModel s)
        {
            //ViewBag.Id = Request["Id"];
            //ViewBag.Name = fc["Name"];
            //ViewBag.Cgpa = fc["Cgpa"];
            return View(s);
        }
    }
}