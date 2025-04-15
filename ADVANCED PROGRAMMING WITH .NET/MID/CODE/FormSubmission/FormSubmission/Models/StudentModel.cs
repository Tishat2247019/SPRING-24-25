﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FormSubmission.Models
{
    public class StudentModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Cgpa { get; set; }
        public string Email { get; set; }   
        public string Gender { get; set; }
        public string Profession { get; set; }
        public DateTime Dob { get; set; }
        public string[] Hobbies { get; set; }
        
    }
}