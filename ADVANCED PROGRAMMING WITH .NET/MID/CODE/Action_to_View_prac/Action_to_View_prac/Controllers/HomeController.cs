using Action_to_View_prac.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Action_to_View_prac.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult check()
        {
            //can be accessed only in the Associated views(Actions own view + layout)
            ViewBag.Name = "tishat";
            ViewData["Cgpa"] = "3.99";
            //using the TempData
            TempData["Id"] = "22-47019-1";

            CheckModel ck = new CheckModel()
            {
                Id = 1,
                Name = "MD. Abu Towsif",
                Cgpa = "3.99"
            };
            CheckModel ckk = new CheckModel
            {
                Id = 2,
                Name = "Farjana Yesmin Opi",
                Cgpa = "3.88"
            };


            CheckModel[] ckks = new CheckModel[] { ck, ckk };

            return View(ckks);
        }
    }
}