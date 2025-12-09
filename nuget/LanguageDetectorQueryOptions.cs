using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.LanguageDetector
{
    /// <summary>
    /// Query options for the Language Detector API
    /// </summary>
    public class LanguageDetectorQueryOptions
    {
        /// <summary>
        /// The text to detect the language of
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
