using CrudPractice.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudPractice.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            var db = new crudEntities();
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
            var db = new crudEntities();
            db.Students.Add(s);
            
            if(db.SaveChanges() > 0)
            {
               return RedirectToAction("Index");
            }
            return View(s);
        }

        public ActionResult Edit(int id)
        {
            var db = new crudEntities();
            var student_data = db.Students.Find(id);
            return View(student_data);
        }
    }
}