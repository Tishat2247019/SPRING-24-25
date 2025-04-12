using Crud.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crud.Controllers
{
    public class StudentController : Controller
    {
        practiceEntities db = new practiceEntities();

        // GET: Student
        public ActionResult Index()
        {
            //for listing all students

            var data = db.Students.ToList();
            return View(data);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Student s)
        {
            //no validation
            db.Students.Add(s);
            //db.SaveChanges();//return the number of rows affected

            if (db.SaveChanges() > 0)
            {
                TempData["Msg"] = "Student added";
                return RedirectToAction("Index");
            }
            TempData["msg"] = "Not Succesfull";
            return View();
        }

        [HttpGet]
        public ActionResult Edit(int id)
        {
            var student = db.Students.Find(id);

            return View(student);

        }

    }  
}