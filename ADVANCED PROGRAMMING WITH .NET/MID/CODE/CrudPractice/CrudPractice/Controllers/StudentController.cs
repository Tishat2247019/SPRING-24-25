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

        [HttpGet]
        public ActionResult Edit(int id)
        {
            var db = new crudEntities();
            var student_data = db.Students.Find(id);
            return View(student_data);
        }

        [HttpPost]
        public ActionResult Edit(Student s)
        {
            var db = new crudEntities();
            var old_data = db.Students.Find(s.Id);
            old_data.Name = s.Name;
            old_data.Id = s.Id;
            old_data.Dob = s.Dob;
            if(db.SaveChanges() > 0)
            {
                TempData["msg"] = "Information updated";
                return RedirectToAction("Index");
            }
            return View(s);

        }
        [HttpGet]
        public ActionResult Delete(int id)
        {
            var db = new crudEntities();
            var old_data = db.Students.Find(id);
            return View(old_data);
        }

        [HttpPost]
        public ActionResult Delete(Student s)
        {
            var db = new crudEntities();
            var old_data = db.Students.Find(s.Id);
            db.Students.Remove(old_data);
            db.SaveChanges();
            return RedirectToAction("Index");
            //return View();
        }
    }
}