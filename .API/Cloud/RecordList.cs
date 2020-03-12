﻿// Decompiled with JetBrains decompiler
// Type: CloudX.Shared.RecordList
// Assembly: CloudX.Shared, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 2635624C-5F24-4EFB-ACD1-7E9C1349B2F5
// Assembly location: F:\SteamLibrary\steamapps\common\NeosVR\HeadlessClient\CloudX.Shared.dll

using Newtonsoft.Json;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CloudX.Shared
{
  public class RecordList
  {
    [JsonProperty(PropertyName = "id")]
    [JsonPropertyName("id")]
    public string Id
    {
      get
      {
        return this.Name + "-" + this.Page.ToString();
      }
    }

    [JsonProperty(PropertyName = "ownerId")]
    [JsonPropertyName("ownerId")]
    public string OwnerId { get; set; }

    [JsonProperty(PropertyName = "name")]
    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonProperty(PropertyName = "page")]
    [JsonPropertyName("page")]
    public int Page { get; set; }

    [JsonProperty(PropertyName = "records")]
    [JsonPropertyName("records")]
    public List<Record> Records { get; set; }
  }
}
